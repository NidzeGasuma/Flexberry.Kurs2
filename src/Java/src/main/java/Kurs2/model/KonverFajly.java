package Kurs2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kurs2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: КонверФайлы
 */
@Entity(name = "IISKurs2КонверФайлы")
@Table(schema = "public", name = "КонверФайлы")
public class KonverFajly {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Репозиторий")
    private String репозиторий;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "VygrFajla")
    @Convert("VygrFajla")
    @Column(name = "ВыгрФайла", length = 16, unique = true, nullable = false)
    private UUID _vygrfajlaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "VygrFajla", insertable = false, updatable = false)
    private VygrFajla vygrfajla;


    public KonverFajly() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getРепозиторий() {
      return репозиторий;
    }

    public void setРепозиторий(String репозиторий) {
      this.репозиторий = репозиторий;
    }


}